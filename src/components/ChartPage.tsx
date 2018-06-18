import * as React from 'react';
import ReactHighcharts  from 'react-highcharts'
import products from '../data/fixture';
import SelectModeProducts from './SelectModeProducts';
import SelectYear from './SelectYear';

interface IState {
    series: any[],
    selectYear: number,
    currentMode:string
};

class ChartPage extends React.Component<any,IState> {

  constructor(props:any) {
    super(props);

    this.state = {
      series: this._getSeries(this._getMaxYear(this._getAllYears())),
      selectYear: this._getMaxYear(this._getAllYears()),
      currentMode: "PRODUCTS"
    };
    
     this._onYearChanged = this._onYearChanged.bind(this);
     this._onModeProductsChanged = this._onModeProductsChanged.bind(this);
  }

  private _getChartOptions() {
    return {
        title: {
          text: this.state.currentMode
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },xAxis: {
          title: {
              enabled: true,
              text: 'Feature 1'
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Feature 2'
            }
        },
        series: this.state.series
      }
  }

  private _getSeries(year?:number, filterCurrentMode?:string){
    
    const series:any[] = [];
     const seriesCategoriesProduct:any[] = [
       {name:">150",data:[]},
       {name:"<100",data:[]},
       {name:"otherProducts",data:[]}
     ];
    
    if(year){
        products.forEach((val)=>{
          if(val.year === +year){
            series.push({
              name: val.name,
              data: [[val.feature1,val.feature2]]
            });
          }
          
        })
      
    }else{
      products.forEach((val)=>{
        series.push({
          name: val.name,
          data: [[val.feature1,val.feature2]]
        });
      })
    }
    
    if(filterCurrentMode === "CATEGORIES_PRODUCTS"){
      series.forEach((val)=>{
        const data:any[] = [];
        
        if(val.data['0']['0'] > 150){
          seriesCategoriesProduct["0"].data.push(val.data['0']['0'])
        }
        if(val.data['0']['0'] < 100){
          seriesCategoriesProduct["1"].data.push(val.data['0']['0'])
        }
        if((val.data['0']['0'] < 150) && (val.data['0']['0'] > 100)){
          seriesCategoriesProduct["2"].data.push(val.data['0']['0'])
        }
        return data['0'];
      })
      return seriesCategoriesProduct;
    }
    return series;
  }

  private _onYearChanged(selectEventYear:number) {
      this.setState({
          series: this._getSeries(selectEventYear,this.state.currentMode),
        selectYear: selectEventYear,
        currentMode: this.state.currentMode
      }
    );
    
  }

    private _onModeProductsChanged(selectMode:string) {
        this.setState({
            series: this._getSeries(this.state.selectYear, selectMode),
        selectYear: this.state.selectYear,
        currentMode: selectMode

        }
        );
    }

  private _getMaxYear(yers:number) {
    return Math.max.apply(null, yers);
  }

  private _getAllYears(){
    const yearsProduct:any = [];

    products.forEach(
        (data)=>{
            if(yearsProduct.indexOf( data.year ) === -1){
                yearsProduct.push(data.year)
            } 
        }
    );
    return yearsProduct;
}

    public render() {
        const { selectYear, currentMode } = this.state;
        return (
        <div className="App">
            <ReactHighcharts
            config={this._getChartOptions()}
            />
            <form>
            <SelectYear
                years={this._getAllYears()}
                currentYear={selectYear}
                onChange={this._onYearChanged}
            />
            <SelectModeProducts
                currentMode={currentMode}
                onChange={this._onModeProductsChanged}
            />
            </form>
        </div>
        );
    }
}

export default ChartPage;