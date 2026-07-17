import { useState } from 'react';
import { PlusCircle, Eye, MapPinned } from 'lucide-react';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import { serviceOrders, type ServiceOrder, type ServiceOrderStatus } from '../../data/dashboard-data';

const statusTone: Record<ServiceOrderStatus, 'neutral' | 'blue' | 'warning' | 'green'> = {
  Pendente: 'neutral',
  'Em análise': 'blue',
  'Em campo': 'warning',
  Resolvida: 'green',
  Descartada: 'neutral',
};

type ModalAction = { title: string; body: string } | null;

export default function ServiceOrdersPanel() {
  const [modalAction, setModalAction] = useState<ModalAction>(null);

  const openDetails = (order: ServiceOrder) =>
    setModalAction({
      title: `Ordem ${order.id}`,
      body: `Ligação ${order.ligacao}, ${order.setor}. Status atual: ${order.status}. Prioridade ${order.prioridade.toLowerCase()}. Aberta ${order.aberturaSimulada}. Este é um detalhamento demonstrativo, sem persistência de dados.`,
    });

  const markInField = (order: ServiceOrder) =>
    setModalAction({
      title: 'Marcar como em campo',
      body: `A ordem ${order.id} seria movida para o status "Em campo" em uma versão funcional da plataforma. Nesta demonstração estática, nenhuma alteração é salva.`,
    });

  const createOrder = () =>
    setModalAction({
      title: 'Criar ordem de serviço',
      body: 'Em uma versão funcional, este botão abriria um formulário para registrar uma nova ordem de serviço vinculada a um alerta. Nesta demonstração estática, a ação é apenas ilustrativa.',
    });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-brand-deep">Ordens de serviço (simulado)</h3>
          <p className="mt-0.5 text-xs text-slate-500">Ações simuladas, sem persistência de dados.</p>
        </div>
        <button
          type="button"
          onClick={createOrder}
          className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-deep"
        >
          <PlusCircle size={16} aria-hidden="true" />
          Criar ordem de serviço
        </button>
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {serviceOrders.map((order) => (
          <li
            key={order.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-brand-mist/50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-brand-deep">{order.id}</span>
                <Badge tone={statusTone[order.status]}>{order.status}</Badge>
              </div>
              <p className="text-xs text-slate-500">
                Ligação {order.ligacao} · {order.setor} · aberta {order.aberturaSimulada}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => openDetails(order)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-white"
              >
                <Eye size={14} aria-hidden="true" />
                Visualizar detalhes
              </button>
              <button
                type="button"
                onClick={() => markInField(order)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 px-3 py-1.5 text-xs font-semibold text-brand-blue hover:bg-brand-fog"
              >
                <MapPinned size={14} aria-hidden="true" />
                Marcar como em campo
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Modal open={modalAction !== null} onClose={() => setModalAction(null)} title={modalAction?.title ?? ''}>
        <p className="text-sm leading-relaxed text-slate-600">{modalAction?.body}</p>
      </Modal>
    </div>
  );
}
