import * as React from 'react';
import type { IFancyListProps } from './IFancyListProps';
import { IListItem } from './IListItem';
interface IFancyListState {
    items: IListItem[];
    categories: string[];
    selectedCategory: string;
    expandedItems: Set<number>;
    loading: boolean;
    error: string;
}
export default class FancyList extends React.Component<IFancyListProps, IFancyListState> {
    constructor(props: IFancyListProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IFancyListProps): void;
    private loadListData;
    private handleCategoryClick;
    private handleItemToggle;
    private getFilteredItems;
    render(): React.ReactElement<IFancyListProps>;
}
export {};
//# sourceMappingURL=FancyList.d.ts.map