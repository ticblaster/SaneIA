import { useState, type FormEvent } from 'react';
import { Send, Info } from 'lucide-react';
import Modal from './ui/Modal';

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <section className="bg-brand-deep py-20 text-white sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-balance sm:text-4xl">
          Vamos transformar dados em decisões para preservar água.
        </h2>
        <p className="max-w-2xl text-blue-100/90">
          A SaneIA Água está em fase de estruturação e busca validar suas hipóteses com
          profissionais, municípios, SAAEs, autarquias e prestadores de abastecimento.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="#escopo"
            className="focus-ring inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Conhecer o escopo
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep hover:bg-blue-50"
          >
            Conversar sobre validação
            <Send size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <Modal open={open} onClose={closeModal} title="Conversar sobre validação">
        {submitted ? (
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <p>
              Mensagem preparada com sucesso nesta demonstração. Em uma versão futura, este
              formulário enviará o contato para a equipe da SaneIA Água.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="focus-ring self-start rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-deep"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-700 ring-1 ring-inset ring-amber-200">
              <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              Formulário demonstrativo. O envio será implementado em uma fase posterior.
            </div>

            <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              Nome
              <input
                type="text"
                required
                className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              Organização
              <input
                type="text"
                className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              Função
              <input
                type="text"
                className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              E-mail
              <input
                type="email"
                required
                className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              Mensagem
              <textarea
                rows={3}
                className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800"
              />
            </label>

            <button
              type="submit"
              className="focus-ring mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep"
            >
              <Send size={16} aria-hidden="true" />
              Enviar mensagem
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
}
