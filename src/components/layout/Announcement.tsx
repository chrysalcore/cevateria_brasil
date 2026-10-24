import { Icon } from '../global/Icon';

export function Announcement() {
    return (
        <div className="flex min-h-8 items-center justify-center gap-3 bg-ink px-5 text-center text-xs tracking-wide text-on-dark md:min-h-9">
            Pequenas pausas. Muito sabor. Um toque de amor.
            <Icon name="heart" className="size-4" />
        </div>
    );
}
