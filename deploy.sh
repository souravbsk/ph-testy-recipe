- name: Run deploy script
  run: |
    ssh -o StrictHostKeyChecking=no root@157.173.222.223 'bash -s' < deploy.sh
