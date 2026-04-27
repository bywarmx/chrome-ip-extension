// Obtener IP Publica
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

// Copiar IP al portapapeles
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function() {
    const ipId = this.getAttribute('data-ip');
    const ipElement = document.getElementById(ipId);
    const ip = ipElement.textContent;
    
    if (ip === 'Cargando...' || ip === 'Error al obtener IP') {
      alert('No hay IP para copiar');
      return;
    }
    
    navigator.clipboard.writeText(ip).then(() => {
      const originalText = this.textContent;
      this.textContent = '✓';
      this.style.background = '#28a745';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '#28a745';
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar la IP');
    });
  });
});

// Ejecutar al cargar
getLocalIp();
getPublicIp();