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
    titleImageError: boolean;
    titleImageValidationError: string | null;
    titleImageLoadError: boolean;
    filterImageValidationError: string | null;
    filterImageLoadError: boolean;
}
export default class FancyList extends React.Component<IFancyListProps, IFancyListState> {
    constructor(props: IFancyListProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IFancyListProps): void;
    private loadListData;
    private handleCategoryClick;
    private handleItemToggle;
    private getFilteredItems;
    private getBackgroundStyle;
    private getShapeRadius;
    private getGradientStyle;
    private getFilterBorderRadius;
    private getTextDecoration;
    private getCategorySectionFontStyle;
    private getFilterBackgroundStyle;
    private checkFilterImage;
    private hexToRgba;
    private validateImageFileType;
    private checkTitleImage;
    private getTitleStyle;
    private renderTitle;
    render(): React.ReactElement<IFancyListProps>;
}
export {};
//# sourceMappingURL=FancyList.d.ts.map