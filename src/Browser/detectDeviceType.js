'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 检测设备类型

var detectDeviceType = function detectDeviceType() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
  );
};

exports.default = detectDeviceType;