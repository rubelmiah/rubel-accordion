/* eslint-disable react/prop-types */
import { useEffect, useId, useRef } from "react";

/**
 * Rich-text editor backed by Trix (the editor Shopify-style description fields
 * are built on). Stores its content as an HTML string.
 *
 * Trix references `document` at import time, so it must only load on the
 * client — we dynamically import it (and its stylesheet) inside an effect to
 * keep server-side rendering working.
 *
 * The field is uncontrolled after mount: `value` seeds the initial content and
 * `onChange` reports HTML on every edit. Re-rendering does not push `value`
 * back into the editor (that would reset the caret).
 */
export default function RichTextEditor({ label, value = "", onChange }) {
  // Trix binds to an input via getElementById, so the id must be DOM-safe.
  const inputId = `trix-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const editorRef = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    let cleanup;
    let active = true;

    (async () => {
      await import("trix/dist/trix.css");
      await import("trix");
      if (!active) return;

      const editor = editorRef.current;
      if (!editor) return;

      const handler = () => {
        const input = document.getElementById(inputId);
        if (input) onChangeRef.current(input.value);
      };
      editor.addEventListener("trix-change", handler);
      cleanup = () => editor.removeEventListener("trix-change", handler);
    })();

    return () => {
      active = false;
      if (cleanup) cleanup();
    };
  }, [inputId]);

  return (
    <s-stack direction="block" gap="small-300">
      {label ? <s-text>{label}</s-text> : null}
      {/* Trix reads this hidden input's value on init and writes HTML back to it. */}
      <input id={inputId} type="hidden" defaultValue={value} />
      <trix-editor input={inputId} ref={editorRef}></trix-editor>
    </s-stack>
  );
}
