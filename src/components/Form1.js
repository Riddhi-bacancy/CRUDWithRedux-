import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Form1 extends Component {
    render() {
        const { history } = this.props;
        return (
            <div>
                <Link to="/insert"><button name="b1">Add User</button></Link>
                <ul>
                    {
                        history.map((item) => {
                            return (Object.keys(item).map((data) => {
                                return (
                                    (data === 'hobby') ?
                                        <li>{item[data][0]}</li>
                                        :
                                        <li>{item[data]}</li>
                                )
                            })
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return { history: state.history };
}
export default connect(mapStateToProps, null)(Form1);