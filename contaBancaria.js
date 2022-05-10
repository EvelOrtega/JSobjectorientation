class ContaBancaria {
  constructor(agencia, numero, tipo, cartaoCredito) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.cartaoCredito = cartaoCredito;
    this._saldo = 0;
  }
  get cartãoCredito() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }
  sacar(valor) {
    if (valor > this.saldo) {
      return "saldo insuficiente";
    }
    this._saldo = this.saldo - valor;
    return this._saldo;
  }
  depositar(valor) {
    this._saldo = this._saldo + valor;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, saldo);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "poupanca";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "Universitaria";
  }
  sacar(valor) {
    if (valor > 500) {
      return "operação negada!";
    }
    this._saldo = this._saldo - valor;
  }
}
