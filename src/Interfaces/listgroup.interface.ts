export interface ListGroupProps {
    heading: string;
    items: string[];
    onSelectItem: (item: string) => void;
}