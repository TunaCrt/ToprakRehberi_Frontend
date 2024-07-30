import axios from "axios";

const API_URL = "http://localhost:8080"; 

class TerrainService {

    saveTerrain(terrain) {
        return axios.post(API_URL + "/saveTerrain", terrain);
    }

    getAllTerrain() {
        return axios.get(API_URL + "/terrain");
    }

    getTerrainById(id) {
        return axios.get(API_URL + "/terrain/" + id);
    }

    deleteTerrain(id) {
        return axios.get(API_URL + "/deleteTerrain/" + id);
    }

    editTerrain(terrain) {
        return axios.post(API_URL + "/editTerrain/" + terrain.id, terrain);
    }

}

export default new TerrainService;