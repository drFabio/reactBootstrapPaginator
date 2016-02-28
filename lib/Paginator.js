'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginator = _react2.default.createClass({
    displayName: 'Paginator',
    getDefaultProps: function getDefaultProps() {
        return {
            max: 10,
            current: 1
        };
    },
    render: function render() {
        var _this = this;

        var current = this.props.current;
        var total = this.props.total;
        var max = this.props.max;

        var start = Math.max(current - Math.round(max / 2), 1);

        var end = Math.min(start + max, total);
        if (end - start < max) {
            start = Math.max(1, end - max);
        }
        var hasLess = null;
        var previous = null;
        if (start != 1) {
            hasLess = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    null,
                    '...'
                )
            );
            previous = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left', onClick: function onClick(e) {
                            return _this.props.onPage(start - 1);
                        } })
                )
            );
        }
        var hasMore = null;
        var next = null;
        if (end < total) {
            hasMore = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    null,
                    '...'
                )
            );
            next = _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right', onClick: function onClick(e) {
                            return _this.props.onPage(start + 1);
                        } })
                )
            );
        }
        var getLinks = function getLinks(start, end) {
            var links = [];

            var _loop = function _loop(i) {
                var className = i == current ? 'active' : '';
                links.push(_react2.default.createElement(
                    'li',
                    { key: i, className: className },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(0)', onClick: function onClick(e) {
                                return _this.props.onPage(i);
                            } },
                        i
                    )
                ));
            };

            for (var i = start; i <= end; i++) {
                _loop(i);
            }
            return links;
        };
        return _react2.default.createElement(
            'div',
            { className: 'text-center' },
            _react2.default.createElement(
                'ul',
                { className: 'pagination' },
                previous,
                hasLess,
                getLinks(start, end),
                hasMore,
                next
            )
        );
    }
});
require('./paginator.css');
exports.default = Paginator;
module.exports = exports['default'];
//# sourceMappingURL=Paginator.js.map