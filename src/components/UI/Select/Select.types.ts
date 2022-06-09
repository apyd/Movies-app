export interface ISelectProps {
    options: Array<{
        id: number,
        label: string,
        value: string | number,
        isDefault?: boolean
    }>,
    onOptionChange: () => void
    selectLabel: string
}