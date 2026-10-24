import { MAX_QUANTITY, MIN_QUANTITY } from '../../data/products';
import { Icon } from './Icon';

export function QuantityControl({
    value,
    label,
    onChange,
}: {
    value: number;
    label: string;
    onChange: (quantity: number) => void;
}) {
    return (
        <div className="flex h-12 min-w-28 shrink-0 items-center justify-around rounded border border-control">
            <button
                type="button"
                className="size-11 cursor-pointer disabled:cursor-default disabled:opacity-35"
                aria-label={`Diminuir ${label}`}
                disabled={value <= MIN_QUANTITY}
                onClick={() => onChange(value - 1)}
            >
                <Icon name="minus" className="mx-auto size-4" />
            </button>
            <output aria-live="polite" className="text-sm">
                {value}
            </output>
            <button
                type="button"
                className="size-11 cursor-pointer disabled:cursor-default disabled:opacity-35"
                aria-label={`Aumentar ${label}`}
                disabled={value >= MAX_QUANTITY}
                onClick={() => onChange(value + 1)}
            >
                <Icon name="plus" className="mx-auto size-4" />
            </button>
        </div>
    );
}
