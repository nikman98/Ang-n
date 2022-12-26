export class newstopush
{
    title: string;
    author:string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    createdby: string;
    constructor()
    {
        this.title = localStorage.getItem('title');
        this.author = localStorage.getItem('author');
        this.description = localStorage.getItem('description');
        this.url = localStorage.getItem('url');
        this.urlToImage = localStorage.getItem('urlToImage');
        this.publishedAt = localStorage.getItem('publishedAt');
        this.content = localStorage.getItem('content');
        this.createdby = localStorage.getItem('createdby');
        console.log("this is in newsview");
    }
}