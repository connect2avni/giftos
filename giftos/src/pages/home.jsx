import React from "react";
import axios from "axios";

import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from "../components/header.component";
import Sidebar from "../components/sidebar.component";
import Footer from "../components/footer.component";
// import PostCard from "../components/postcard.component";
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            posts: [],
            head_insiders: {
                page_title: "Home",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        
    }

    render() {
        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar styles="col-md-3 bg-light col-lg-2" selected="home" />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <h4 className="my-4">Dashboard</h4>
                            <div className="task-posts-container row">
                                jhvh
                                
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(HomePage);