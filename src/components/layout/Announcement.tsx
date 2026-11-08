import { useI18n } from '../../hooks/useI18n';
import { Icon } from '../global/Icon';

export function Announcement() {
    const { t } = useI18n();

    return (
        <div className="flex min-h-8 items-center justify-center gap-3 bg-ink px-5 text-center text-xs tracking-wide text-on-dark md:min-h-9">
            {t.announcement}
            <Icon name="heart" className="size-4" />
        </div>
    );
}
