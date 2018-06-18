import * as React from 'react';

interface IProps {
    currentMode: string,
    onChange: (selectMode: string) => void
}

class SelectModeProducts extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this._onModeProductChange = this._onModeProductChange.bind(this);
    }

    private _onModeProductChange(e:any) {
        this.props.onChange(e.target.value);
    }

    public render() {
        const { currentMode } = this.props;
        
        return (
            <div className="container">
                 <div className="row justify-content-md-center">
                    <label className="col-2 col-form-label">Выбор режима: </label>
                    <select value={currentMode} onChange={this._onModeProductChange} className="col-2 form-control">
                        <option value="PRODUCTS">Товары</option>
                        <option value="CATEGORIES_PRODUCTS">Категории товаров</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectModeProducts;