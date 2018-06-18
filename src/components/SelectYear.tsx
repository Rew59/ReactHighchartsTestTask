import * as React from 'react';

interface IProps {
    currentYear: number,
    years: number[],
    onChange: (year: number) => void
}

class SelectYear extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this._onYearChange = this._onYearChange.bind(this);
    }

    private _onYearChange(e:any) {
        this.props.onChange(e.target.value);
    }

    public render() {
        const { years, currentYear } = this.props;

        return (
            <div className="container">
                <div className="row justify-content-md-center form-group">
                    <label className="col-2 col-form-label">Выбор года: </label>
                    <select value={currentYear} onChange={this._onYearChange} className="col-1 form-control">
                        {
                            years.map((data: any) =>
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            )
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectYear;