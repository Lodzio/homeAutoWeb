import * as React from 'react';
import {connect} from "react-redux";

class HomePage extends React.Component<any> {
    public state: any = {

    };

    public constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {

    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);