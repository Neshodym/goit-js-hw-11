import axios from 'axios';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/'; 
const KEY = '34775308-a97226e8b6604969d2a7b1949';
    
async function fetchImg(query, page, perPage) {
    try {
        const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
        );
        // console.log(response.data)
        return response;
        
    }
    catch (error) {
        console.log(error);
    }
}

