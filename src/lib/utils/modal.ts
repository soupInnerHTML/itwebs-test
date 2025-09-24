import styles from "@/components/Modal/Modal.module.scss";
import createSwal, {SweetAlertResult} from "sweetalert2";

const Swal = createSwal.mixin({
  theme: "dark",
  customClass: {
    confirmButton: styles.confirmButton,
    cancelButton: styles.cancelButton
  },
  buttonsStyling: false,
});

interface IFormValues {
  text: string
  file: File
}

export const openModal = async () => {
  const { value: formValues }: SweetAlertResult<IFormValues> = await Swal.fire({
    title: "📤 Отправка данных",
    html: `
        <input id="text" class="${styles.input}" placeholder="Введите текст" required>
        <input id="file" type="file" class="${styles.file}" required>
      `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Отправить",
    cancelButtonText: "Отмена",
    preConfirm: () => {
      const text = (
        document.getElementById("text") as HTMLInputElement
      )?.value;
      const file = (document.getElementById("file") as HTMLInputElement)
        ?.files?.[0];

      if (!text || !file) {
        Swal.showValidationMessage("Все поля обязательны!");
        return false;
      }

      return { text, file };
    },
  });

  if (formValues) {
    console.log("✅ Собранные данные:", formValues);

    const formData = new FormData();
    formData.append("text", formValues.text);
    formData.append("file", formValues.file);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    Swal.fire("Успех!", `Данные отправлены! <br/>Текст: ${formValues.text} <br/>Файл: ${formValues.file.name}`, "success");

    wsEcho(formValues)
  }
};

function wsEcho(formValues: IFormValues) {
  // --- WebSocket Echo ---
  const ws = new WebSocket("wss://ws.postman-echo.com/raw");

  ws.onopen = () => {
    console.log("WS connected, sending data...");
    ws.send(JSON.stringify({ text: formValues.text, fileName: formValues.file.name }));
  };

  ws.onmessage = (event) => {
    console.log("WS Echo received:", event.data);
    const eventData = JSON.parse(event.data)
    Swal.fire(
      "WS Echo",
      `Сервер вернул: <br/>Текст: ${eventData.text} <br/>Файл: ${eventData.fileName}`,
      "info"
    );
    ws.close();
  };

  ws.onerror = (err) => {
    console.error("WS Error:", err);
  };
}