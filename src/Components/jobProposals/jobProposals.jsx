import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getProposal , acceptProposal} from '../../Actions/sumbitProbosal';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class JobProposals extends Component{
    constructor(){
        super()
        this.state={
            data:""
        }
    }

    componentDidMount= async()=>{
        this.props.getProposal(this.props.match.params.id)
        console.log("donedone",this.props.getpro);
        await this.setState({data : this.props.getpro})
    }

    handleAccept= ()=>{
        this.props.acceptProposal(this.props.match.params.id,localStorage.getItem('id'))
    }

    render=()=>{
        return(

            <div>
              <Header />

              <div className="Home-container ">
                <div className="container hiring-page-header px-lg-5 px-1 ">
                    <div className="d-flex flex-wrap justify-content-between px-lg-5 px-1 ">
                        
                        {/* <div className="mt-4 mt-lg-0">
                            <button className="btn btn-outline-success bg-light mr-1  px-lg-4 px-1 font-weight-bold">Browse Pre-defined Projects</button>
                            <button className="btn btn-success ml-1 mr-2 px-lg-4 px-1 font-weight-bold">Post a Job</button>
                        </div> */}
                    </div>
                    <div className="Home-row row px-lg-4 px-1">
                        <div className="col-12 ">
                            <div className="d-flex flex-wrap  justify-content-between posting-hiring-home">
                                <p className="h4 font-weight-bold ">Proposals</p>
                            </div>
                        </div>
                        {this.props.getpro ? 
                            this.props.getpro.proposalsList.map((p)=>{
                                return(
                                    <div className="col-12">
                                    <div className="posting-hire-home  ">
                                        <div className="d-flex justify-content-between">
                                            <p className="font-weight-bold" key={p.userId}>{p.userId}</p>
                                            <p className="m-0 font-weight-bold ">${p.proposal.terms.bid}</p>
                                            
                                        </div>
                                        <div className=" ">
                                            <div>
                                                <p className="m-0 ">{p.proposal.coverLetter}</p>
                                                {/* <div className="d-flex">
                                                    <p className="m-0 edit-font-small">Invite-only</p>
                                                    <p className="m-0 edit-font-small">- Created </p>
                                                </div> */}
                                            </div>
                                            <div className="mt-3">
                                            <button className="btn btn-success" onClick={this.handleAccept()}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })
                            :<div className="col-12">
                              <div className="posting-hire-home justify-content-center d-flex">
                                <p className="h6">This job Post doesn't have any proposals.</p>
                              </div>
                            </div>
                            }
                    </div>
                </div>
               </div> 

              <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("hhhhhhhh", state);
    return {
        getpro : state.postProposalReducer.getProposal
    }
  }
  
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProposal,
        acceptProposal
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps) (JobProposals);