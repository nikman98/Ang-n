export class commentdata
{
    title: string;
    author:string;
    urlToImage: string;
    description: string;
    commentnws: string;
    createdby: string;
    constructor()
    {
        this.title = localStorage.getItem('title');
        this.author = localStorage.getItem('author');
        this.description = localStorage.getItem('description');
        this.urlToImage = localStorage.getItem('urlToImage');
        this.createdby = localStorage.getItem('createdby');
        console.log("this is in newsview");
    }
}