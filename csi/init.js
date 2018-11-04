//
//: ,
const getJson = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: "GET",
            format: "JSON",
            success: resolve,
            error:  reject
        })
    })
};

window.onload = async () => {
    const c = new Controller();
    const titleUrl = "https://en.wikipedia.org/api/rest_v1/page/random/title";
    const pageUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

    console.log(new Array(30).fill("<small>LOADING</small>").join(""))
    c.init(new Array(30).fill("<small>LOADING</small>").join(""));

    const title = await getJson(titleUrl).then((data) => {console.log(data); return data.items[0].title}).catch((err) => "Scrollbar");
    const content = await getJson(pageUrl+title+"&redirect=false").catch((err) => "Error getting content");
    const url = content.content_urls.desktop.page;
    const html = "<a href='"+url+"' target='_blank'><h1 class=''>"+ content.displaytitle +"</h1></a><br/><br/>"
        + "<img src='"+ content.thumbnail.source +"'/>"
        + content.extract_html;

    c.updateContent(html);
    return
}

$(function(doc) {






});
