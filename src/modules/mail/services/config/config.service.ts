import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    host:string;
    port:number;
    secure: string;
    user: string;
    pass:string;

    constructor(){
        this.host="smtp.gmail.com";
        this.port= 587;
        this.secure="tls"
        this.user="inf@cubamuseo.net"
        this.pass="T3rr0r8080"
    }
}
