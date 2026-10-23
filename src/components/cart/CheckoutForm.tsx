import { useState } from 'react';
import { buildOrderMessage, getSubtotal, whatsappUrl } from '../../helpers/whatsapp';
import { formatPrice } from '../../helpers/formatPrice';
import { useCart } from '../../hooks/useCart';
import { cepSchema } from '../../schemas/cepSchema';
import { Button } from '../global/Button';

export function CheckoutForm() {
    const { cart } = useCart();
    const [name, setName] = useState('');
    const [cep, setCep] = useState('');
    const [cepError, setCepError] = useState('');

    function handleSend(event: React.MouseEvent<HTMLAnchorElement>) {
        const result = cepSchema.safeParse(cep);
        if (!result.success) {
            event.preventDefault();
            setCepError(result.error.issues[0].message);
            document.getElementById('customer-cep')?.focus();
        }
    }

    const message = buildOrderMessage(cart, name.trim(), cep.trim());

    return (
        <div>
            <div className="mt-6 flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <strong className="font-serif text-2xl font-normal">{formatPrice(getSubtotal(cart))}</strong>
            </div>
            <p className="mt-1 text-xs text-muted">Frete a combinar pelo WhatsApp.</p>

            <label htmlFor="customer-name" className="mt-5 mb-2 block text-sm">
                Seu nome <span className="text-xs text-muted">(opcional)</span>
            </label>
            <input
                id="customer-name"
                type="text"
                autoComplete="given-name"
                maxLength={80}
                placeholder="Como podemos chamar você?"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded border border-control bg-transparent p-3 text-sm"
            />

            <label htmlFor="customer-cep" className="mt-5 mb-2 block text-sm">
                CEP para consultar entrega <span className="text-xs text-muted">(opcional)</span>
            </label>
            <input
                id="customer-cep"
                type="text"
                autoComplete="postal-code"
                inputMode="numeric"
                maxLength={9}
                placeholder="00000-000"
                value={cep}
                aria-invalid={Boolean(cepError)}
                aria-describedby="cep-error"
                onChange={(event) => {
                    setCep(event.target.value);
                    setCepError('');
                }}
                className="w-full rounded border border-control bg-transparent p-3 text-sm aria-invalid:border-error"
            />
            <p id="cep-error" role="alert" className="mt-2 text-sm text-error empty:hidden">
                {cepError}
            </p>

            <div className="mt-5">
                <Button href={whatsappUrl(message)} external wide onClick={handleSend}>
                    Enviar pedido pelo WhatsApp
                </Button>
            </div>
            <small className="mt-3 block text-xs leading-relaxed text-muted">
                O envio abre uma conversa. Disponibilidade, frete e pagamento são confirmados no atendimento.
            </small>
        </div>
    );
}
