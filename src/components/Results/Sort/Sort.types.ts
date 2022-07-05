export interface ISortProps {
    options: Array<{
        id: number,
        label: string,
        value: string | number,
        isDefault?: boolean
    }>,
    onOptionChange: () => void
    sortLabel: string
}