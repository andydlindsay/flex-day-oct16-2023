# M02W05 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* two machines being able to communicate with each other

### Internet Protocol (IP)
* each computer on the network has a unique address
* similar to a street address
  * IPv4 127.0.0.1 192.168.0.192
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888

### Port
* is the unique indentifier of a particular application on the machine
* apartment numbers
* 65,535 ports to choose from
  * <1000 reserved for the system
  * 3000 - 8000 for development ports
  * 80 HTTP
  * 443 HTTP
  * 22 SSH
  * 5432 Postgres

* Clients -> want something
* Servers -> has something

### Transport Layer Protocols
* all packages are the same size
* break all communication down into packets
* packets have headers => where is it going, where is it from

### TCP
* Transmission Control Protocol
* requires a connection (3-way handshake)
* any corrupted/missing packets are re-sent
* packets are guaranteed to arrive in order
* useful when communicated needs to be guaranteed

### UDP
* User Datagram Protocol
* connectionless
* missing packets are lost
* packets can arrive in any order
* low latency applications

### Event-Driven Programming
* register a function to be called when a specific event occurs


"Move: up"
"Name: xyz"











