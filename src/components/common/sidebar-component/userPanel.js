import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';

const UserPanel = () => {
    const url= '';

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : man} alt="#" />
                    <div className="profile-edit">
                        <Link to="#">
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">Abdullah hameed</h6>
                <p>Associate at XYZ Corporation</p>
            </div>
        </Fragment>
    );
};

export default UserPanel;