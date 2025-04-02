
interface EnviarButtomsProps {
  isSending: boolean;
}

export default function EnviarButtoms({ isSending }: EnviarButtomsProps) {
  return (
    <button
      type="submit"
      disabled={isSending}
      className="w-full text-white bg-text rounded border border-text p-3 transition hover:bg-opacity-90"
    >
      {isSending ? 'Enviando...' : 'Enviar mensaje'}
    </button>
  );
}
