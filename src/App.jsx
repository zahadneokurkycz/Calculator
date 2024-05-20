import React from 'react'
import './App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container  from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: '0',
			result: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(type, num) {
		switch(type) {
			case 'c':
				this.setState({
					display: '0',
					result: 0
				})
				break;
			case 'num':
				if (this.state.display == '0') {
					this.setState({
						display: num
					})
					return;
				}
				this.setState({
					display: this.state.display + num
				})
		}
	}

	render() {
		return(
			<>
				<div className='position-absolute start-50 top-50 translate-middle card shadow' style={{width: '30%'}}>
					<div className='card-body text-center'>
						<Stack gap={3}>
							<Row>
								<Col>
									<div className="bg-secondary text-white rounded shadow p-2 text-end" id='display' style={{width: '100%'}}>{this.state.display}</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<button className='btn btn-danger shadow' id='clear' style={{width: '100%'}} onClick={() => this.handleClick('c')}>Clear</button>
								</Col>
								<Col>
									<button className='btn btn-warning shadow' style={{width: '100%'}}><i className='bi bi-backspace' /></button>
								</Col>
								<Col xs={3}>
									<button className='btn btn-secondary shadow' id='divide' style={{width: '100%'}}><i className="ti ti-divide" /></button>
								</Col>	
							</Row>	
							<Row>
								<Col>
									<button className='btn btn-primary shadow' id='seven' style={{width: '100%'}} onClick={() => this.handleClick('num', '7')}>7</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='eight' style={{width: '100%'}} onClick={() => this.handleClick('num', '8')}>8</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='nine' style={{width: '100%'}} onClick={() => this.handleClick('num', '9')}>9</button>
								</Col>	
								<Col>
									<button className='btn btn-secondary shadow' id='multiply' style={{width: '100%'}}><i className='bi bi-x-lg' /></button>
								</Col>
							</Row>	
							<Row>
								<Col>
									<button className='btn btn-primary shadow' id='four' style={{width: '100%'}} onClick={() => this.handleClick('num', '4')}>4</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='five' style={{width: '100%'}} onClick={() => this.handleClick('num', '5')}>5</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='six' style={{width: '100%'}} onClick={() => this.handleClick('num', '6')}>6</button>
								</Col>	
								<Col>
									<button className='btn btn-secondary shadow' id='subtract' style={{width: '100%'}}><i className="bi bi-dash-lg" /></button>
								</Col>
							</Row>	
							<Row>
								<Col>
									<button className='btn btn-primary shadow' id='one' style={{width: '100%'}} onClick={() => this.handleClick('num', '1')}>1</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='two' style={{width: '100%'}} onClick={() => this.handleClick('num', '2')}>2</button>
								</Col>	
								<Col>
									<button className='btn btn-primary shadow' id='three' style={{width: '100%'}} onClick={() => this.handleClick('num', '3')}>3</button>
								</Col>
								<Col>
									<button className='btn btn-secondary shadow' id='add' style={{width: '100%'}}><i className='bi bi-plus-lg' /></button>
								</Col>	
							</Row>	
							<Row>
								<Col>
									<button className='btn btn-primary shadow' id='zero' style={{width: '100%'}} onClick={() => this.handleClick('num', '0')}>0</button>
								</Col>	
								<Col>
									<button className='btn btn-info shadow' id='decimal' style={{width: '100%'}}><i className='bi bi-dot' /><span  style={{fontSize: 1}}>.</span></button>
								</Col>	
								<Col xs={6}>
									<button className='btn btn-success shadow' id='equals' style={{width: '100%'}}><i className="ti ti-equal" /><span  style={{fontSize: 1}}>=</span></button>
								</Col>	
							</Row>	
						</Stack>				
					</div>
				</div>
			</>
		)
	}
}

export {
	App
}