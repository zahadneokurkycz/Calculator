import React from 'react'
import './App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Stack } from 'react-bootstrap';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: '0',
			result: 0,
			state: 'firstnum',
			hasdot: false,
			problem: '0',
			lastop: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(action, type) {
		switch(action) {
			case 'c':
				this.setState({
					display: '0',
					result: 0,
					state: 'firstnum',
					hasdot: false,
					problem: '0',
					lastop: ''
				});
				break;
			case 'num':
				this.setState({
					lastop: ''
				})
				if (this.state.state == 'operator') {
					this.setState({
						state: 'secondnum',
						hasdot: false,
					})
				}
				if (this.state.display == '0' || this.state.state == 'equalnum') {
					this.setState({
						display: type,
						state: 'firstnum',
						problem: type
					})
					return;
				}
				this.setState({
					display: this.state.display + type,
					problem: this.state.display + type
				})
				break;
			case 'operator':
				if (this.state.state == 'operator' && type != '-') {
					this.setState({
						display: this.state.problem + type,
						lastop: type
					})
					return;
				} else if (type == '-' && this.state.lastop == '-') {
					return;
				} if (this.state.display == '0' && type == '-') {
					this.setState({
						state: 'operator',
						lastop: type,
						display: type
					})
					return
				} else if (this.state.display == '0' && type == '/') {
					return;
				}

				this.setState({
					state: 'operator',
					lastop: type,
					display: this.state.display + type
				})
				break;
			case 'equals':
					if (this.state.state == 'operator') {
						return;
					}
					let result = eval(this.state.problem)
	
					this.setState({
						state: 'equalnum',
						display: result,
						result: result,
						lastop: '',
						problem: result
					})
					break;
			case 'dot':
				if (this.state.hasdot) {
					return;
				}
				this.setState({
					display: this.state.display + '.',
					hasdot: true
				})
				break;
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
									<button className='btn btn-danger shadow' id='clear' style={{width: '100%'}} onClick={() => this.handleClick('c')} aria-label="Clear">Clear</button>
								</Col>
								<Col>
									<button className='btn btn-warning shadow' style={{width: '100%'}}  aria-label="Backspace"><i className='bi bi-backspace' /></button>
								</Col>
								<Col xs={3}>
									<button className='btn btn-secondary shadow' id='divide' style={{width: '100%'}} onClick={() => this.handleClick('operator', '/')} aria-label="Divide"><i className="ti ti-divide" /></button>
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
									<button className='btn btn-secondary shadow' id='multiply' style={{width: '100%'}} onClick={() => this.handleClick('operator', '*')}  aria-label="Multiply"><i className='bi bi-x-lg' /></button>
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
									<button className='btn btn-secondary shadow' id='subtract' style={{width: '100%'}} onClick={() => this.handleClick('operator', '-')} aria-label="Subtrack"><i className="bi bi-dash-lg" /></button>
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
									<button className='btn btn-secondary shadow' id='add' style={{width: '100%'}} onClick={() => this.handleClick('operator', '+')} aria-label="Add"><i className='bi bi-plus-lg' /></button>
								</Col>	
							</Row>	
							<Row>
								<Col>
									<button className='btn btn-primary shadow' id='zero' style={{width: '100%'}} onClick={() => this.handleClick('num', '0')}>0</button>
								</Col>	
								<Col>
									<button className='btn btn-info shadow' id='decimal' style={{width: '100%'}}  aria-label="Dot" onClick={() => this.handleClick('dot',)}><i className='bi bi-dot' /><span  style={{fontSize: 1}}>.</span></button>
								</Col>	
								<Col xs={6}>
									<button className='btn btn-success shadow' id='equals' style={{width: '100%'}} aria-label="Equals" onClick={() => this.handleClick('equals')}><i className="ti ti-equal" /><span  style={{fontSize: 1}}>=</span></button>
								</Col>	
							</Row>	
						</Stack>				
					</div>
				</div>
			</>
		)
	}
}

function Theme() {
	return (
		<>
			<div className='position-absolute end-0 bottom-0 p-4'>
				<themer-btn btnclass="btn btn-secondary" />
			</div>
		</>
	);
}

export {
	App,
	Theme
}