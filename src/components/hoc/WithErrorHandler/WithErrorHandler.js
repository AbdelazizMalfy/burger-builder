import React, { Component} from 'react';

import Modal from '../../UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state= {    
            error: null
        }
        componentDidMount () {
            axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res => res ,error =>{
                this.setState({error})
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render() {
            return(
                <div>
                    {this.state.error === null ? null : <Modal modalClosed={this.errorConfirmedHandler}> 
                        {this.state.error.message}
                    </Modal>}
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
        
    }
}


export default  WithErrorHandler