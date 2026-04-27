// Obtener IP Pública
async function getPublicIp() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    document.getElementById('publicIp').textContent = data.ip;
  } catch (error) {
    document.getElementById('publicIp').textContent = 'Error al obtener IP';
    document.getElementById('publicIp').parentElement.classList.add('error');
  }
}

// Obtener IP Local
async function getLocalIp() {
  try {
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    
    pc.onicecandidate = (ice) => {
      if (!ice || !ice.candidate) return;
      
      const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
      const ipAddress = ipRegex.exec(ice.candidate.candidate)[1];
      
      document.getElementById('localIp').textContent = ipAddress;
      pc.close();
    };
    
    pc.createOffer().then(offer => pc.setLocalDescription(offer));
  } catch (error) {
    document.getElementById('localIp').textContent = 'Error al obtener IP';
    document.getElementById('localIp').parentElement.classList.add('error');
  }
}

// Ejecutar al cargar
getLocalIp();
getPublicIp();