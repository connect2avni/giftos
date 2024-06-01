import React from "react";
import axios from "axios";

import withRouter from '../components/withrouter.component';
import WebHead from '../components/webhead.component';
import Header from "../components/header.component";
import Sidebar from "../components/sidebar.component";
import Footer from "../components/footer.component";
import TableData from '../components/tabledata.component'
// import PostCard from "../components/postcard.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Description, Keywords } from "../components/constants.component";

class ProductsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Products",
                keywords: Keywords,
                description: Description,
            },
            columns: [
                {
                    name: "#",
                    selector: (row) => row.id,
                },
                {
                    name: "Name",
                    selector: (row) => row.name,
                },
                {
                    name: "Email",
                    selector: (row) => row.email,
                },
                {
                    name: "Handle",
                    selector: (row) => row.handle,
                },
                {
                    name: "Role",
                    selector: (row) => row.role,
                },
                {
                    name: "Last Update",
                    selector: (row) => row.last_update,
                },
                {
                    name: "Actions",
                    selector: (row) => row.actions,
                },
            ],
            data: [],
            showModal: false,
        };
    }
    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        
    }

    createProduct = () => {
        this.props.navigate('/products/create')
    }

    render() {
        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar styles="col-md-3 bg-light col-lg-2" selected="products" />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <h4 className="my-4">{this.state.head_insiders.page_title}</h4>
                            <div className="task-posts-container row">
                            <TableData columns={this.state.columns} data={this.state.data} 
                                additionalComponent={
                                    <button className="btn btn-primary" onClick={this.createProduct}>Create Product</button>
                                } 
                            />

                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default withRouter(ProductsPage);