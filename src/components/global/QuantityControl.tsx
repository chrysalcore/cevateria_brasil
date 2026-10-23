import { MAX_QUANTITY, MIN_QUANTITY } from '../../data/products';

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
        <div className="flex h-12 min-w-28 shrink-0 items-center justify-around rounded border border-edge">
            <button
                type="button"
                className="size-11 cursor-pointer text-xl disabled:cursor-default disabled:opacity-35"
                aria-label={`Diminuir ${label}`}
                disabled={value <= MIN_QUANTITY}
                onClick={() => onChange(value - 1)}
            >
                −
            </button>
            <output aria-live="polite" className="text-sm">
                {value}
            </output>
            <button
                type="button"
                className="size-11 cursor-pointer text-xl disabled:cursor-default disabled:opacity-35"
                aria-label={`Aumentar ${label}`}
                disabled={value >= MAX_QUANTITY}
                onClick={() => onChange(value + 1)}
            >
                +
            </button>
        </div>
    );
}
