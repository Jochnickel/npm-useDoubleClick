const timeouts: { [any: string]: number } = {};
export const useDoubleClick = (p: { onClick?: () => any, onDoubleClick?: () => any, uniqueName?: string }, msDelay: number = 250) => {
    const i = p.uniqueName || 0;
    if (timeouts[i]) {
        clearTimeout(timeouts[i]);
        delete timeouts[i];
        p.onDoubleClick && p.onDoubleClick();
    } else {
        timeouts[i] = setTimeout(() => {
            delete timeouts[i];
            p.onClick && p.onClick();
        }, msDelay);
    }
};