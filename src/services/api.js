import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.3.2:3333", //Genymotion
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com Fisico: IP da máquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (Andoid Studio)
 * Android com emulador: 10.03.2 (Genymotion)
 * Android com fisico: IP da máquina
 *
 */
