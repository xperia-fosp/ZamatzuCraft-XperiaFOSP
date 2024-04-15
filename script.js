// Script for ZamatzuCraft Server Website //

// Do not copyright unless if has permission to use this script //

function showInput() {
      const inputContainer = document.getElementById('inputContainer');
      inputContainer.style.display = 'flex';
      inputContainer.classList.add('active');
    }

    function joinServer() {
      const serverInput = document.getElementById('serverInput').value;
      if (serverInput === 'mc-1927b8Y92jk-g8J026') {
        window.location.href = 'minecraft://?addExternalServer=§l§eZamatzuCraft S2|ZamatzuCraftS1.aternos.me:14026';
      } else {
        showModal();
      }
    }

    function showModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'flex';
    }

    function closeModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
    }

