
export const getImagen = async () => {
    try {
        const giphyApiKey = "9Wn4MiJc78rjNunkLcyJFB1iLJWFCRgI";
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=&rating=g`
        await fetch(url)
            .then(response => response.json())
            .then(result => {
                const urlImg = result.data.images.original.url;
                console.log(result.data.images.original.url);
                return urlImg
            })
    } catch (error) {
        console.log(error)
        return "No se encontro ninguna imagen";
    };
}






