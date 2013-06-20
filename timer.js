nonLinearTimer = {
    _period: 1000,
    _onNonLinearTimerEvent: null,
    _empty: function () {},
    _mode: null
}

nonLinearTimer.Start = function () {
    setTimeout(nonLinearTimer._mode, nonLinearTimer._period);
    nonLinearTimer._onNonLinearTimerEvent();
}

nonLinearTimer.Stop = function () {
    this._mode = this._empty;
}

nonLinearTimer.Prepare = function () {
    this._mode = this.Start;
}

nonLinearTimer.setHandler = function (f) {
    this._onNonLinearTimerEvent = f;
}

nonLinearTimer.setPeriod = function (p) {
    this._period = p;
}