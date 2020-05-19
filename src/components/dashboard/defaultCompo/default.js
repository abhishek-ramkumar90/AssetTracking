import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import DevPieChart from '../../common/pichart';


const Default = () => {



    return (
        <Fragment>
    
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
 
                            <div className="card-body">
                                <CardColumns>
                                        
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Approve Add to Store Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Approve Allocation Assets Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Repair Requests Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Accept Ownership Transfer Assets
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            IUT Permanent Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            IUT Temporary Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Intra Approval Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Disposal Requests Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Ownership Approval Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            Accept Asset Pending
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                0
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        <Card bg="primary" text="white" className="text-center p-3">
                                            <blockquote className="blockquote mb-0 card-body">
                                            <p>
                                            My Assets
                                            </p>
                                            <footer className="blockquote-footer">
                                            <Card.Text>
                                                92
                                            </Card.Text>
                                            </footer>
                                            </blockquote>
                                        </Card>
                                        
                                  </CardColumns>
                            </div>
                            <div className="card-body">
                              <DevPieChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Default;