export interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}