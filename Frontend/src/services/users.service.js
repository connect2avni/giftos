import Service from './service.service';

class UserService extends Service{

    constructor(props){
        super(props);
        this.hit = 'User';
    }

    async getAllUsers(){
        this.hit = 'User';
        this.create_url();
        await this.get();
        return this.response.data.users;
    }

    async createUser(data){
        this.hit = 'User/create';
        this.create_url();
        this.data = data;
        await this.post();
        return this.response;
    }

    async login(data){
        this.hit = 'User/login';
        this.create_url();
        this.data = data;
        await this.post();
        return this.response;
    }

}

export default UserService;