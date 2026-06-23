/* @ds-bundle: {"format":3,"namespace":"GVAPharmaTraceHubDesignSystem_019f02","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"92531e6e6127","components/core/Button.jsx":"3b36e737cd72","components/core/Card.jsx":"32fb78f64cd6","components/data/Stat.jsx":"76e69d11b7a5","components/feedback/Alert.jsx":"29ef24f75ccd","components/forms/Checkbox.jsx":"ea12013c5f0a","components/forms/Input.jsx":"72c2bdbe9331","components/forms/Select.jsx":"179b358b62d7","ui_kits/website/Dashboard.jsx":"b5f36580d58b","ui_kits/website/Features.jsx":"612b0959aace","ui_kits/website/Footer.jsx":"02e65b78ba56","ui_kits/website/Header.jsx":"962ae8127830","ui_kits/website/Hero.jsx":"205e922220fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GVAPharmaTraceHubDesignSystem_019f02 = window.GVAPharmaTraceHubDesignSystem_019f02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status/metadata badge. Tones map to the semantic palette;
 * `solid` fills, default is a soft tinted pill.
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--grey-100)', 'var(--grey-700)'],
      solid: ['var(--grey-700)', '#fff'],
      dot: 'var(--grey-500)'
    },
    brand: {
      soft: ['var(--indigo-100)', 'var(--indigo-700)'],
      solid: ['var(--indigo-700)', '#fff'],
      dot: 'var(--indigo-500)'
    },
    success: {
      soft: ['var(--success-100)', 'var(--success-600)'],
      solid: ['var(--success-600)', '#fff'],
      dot: 'var(--success-600)'
    },
    warning: {
      soft: ['var(--warning-100)', 'var(--warning-600)'],
      solid: ['var(--warning-600)', '#fff'],
      dot: 'var(--warning-600)'
    },
    danger: {
      soft: ['var(--danger-100)', 'var(--danger-600)'],
      solid: ['var(--danger-600)', '#fff'],
      dot: 'var(--danger-600)'
    },
    info: {
      soft: ['var(--info-100)', 'var(--info-600)'],
      solid: ['var(--info-600)', '#fff'],
      dot: 'var(--info-600)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const [bg, fg] = solid ? t.solid : t.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'currentColor' : t.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PharmaTrace Hub primary button.
 * Variants map to the brand: solid indigo (primary), red (danger/action),
 * outline and ghost for secondary use.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 34,
      fontSize: 13
    },
    md: {
      padding: '0 20px',
      height: 42,
      fontSize: 14
    },
    lg: {
      padding: '0 28px',
      height: 52,
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--indigo-700)',
      color: 'var(--white)',
      border: '1px solid var(--indigo-700)'
    },
    danger: {
      background: 'var(--red-600)',
      color: 'var(--white)',
      border: '1px solid var(--red-600)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--indigo-700)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--indigo-700)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.height,
      padding: s.padding,
      width: full ? '100%' : 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '-0.01em',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = variant === 'outline' || variant === 'ghost' ? 'brightness(0.97)' : 'brightness(1.1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. `interactive` adds hover elevation; `accent`
 * shows a left brand keyline for emphasis rows.
 */
function Card({
  interactive = false,
  padding = 'var(--space-5)',
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** KPI / metric block for dashboards. Optional delta trend. */
function Stat({
  label,
  value,
  unit,
  delta,
  deltaTone = 'success',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    success: 'var(--success-600)',
    danger: 'var(--red-600)',
    neutral: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--indigo-500)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: tones[deltaTone] || tones.neutral,
      fontFamily: 'var(--font-body)'
    }
  }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message banner. Tone sets the color and default icon. */
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: 'var(--info-100)',
      fg: 'var(--info-600)',
      icon: 'ℹ'
    },
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)',
      icon: '✓'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-600)',
      icon: '!'
    },
    danger: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-600)',
      icon: '✕'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: t.fg,
      color: '#fff',
      fontWeight: 700,
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      flex: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Checked state fills indigo. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--indigo-700)' : 'var(--border-strong)'}`,
      background: on ? 'var(--indigo-700)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3 4.7-5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, optional hint/error, and adornments.
 * Indigo focus ring; red border in error state.
 */
function Input({
  label,
  hint,
  error,
  prefix = null,
  suffix = null,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--red-600)' : focus ? 'var(--indigo-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 42,
      padding: '0 12px',
      background: 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      minWidth: 0
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native-backed select styled to match Input. */
function Select({
  label,
  hint,
  options = [],
  style = {},
  id,
  ...rest
}) {
  const selId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId
  }, rest, {
    style: {
      width: '100%',
      height: 42,
      padding: '0 36px 0 12px',
      appearance: 'none',
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Dashboard.jsx
try { (() => {
// Authenticated dashboard view — sidebar + KPIs + lot traceability table.
function Dashboard({
  onExit
}) {
  const {
    Stat,
    Badge,
    Button,
    Input
  } = window.GVAPharmaTraceHubDesignSystem_019f02;
  const [q, setQ] = React.useState('');
  const nav = [['Resumen', true], ['Lotes', false], ['Centros', false], ['Informes', false], ['Alertas', false]];
  const rows = [['2024-A7', 'Amoxicilina 500mg', 'Hospital La Fe', 'success', 'Verificado'], ['2024-B2', 'Insulina glargina', 'CS Russafa', 'warning', 'En tránsito'], ['2024-C9', 'Paracetamol 1g', 'Hospital General', 'success', 'Verificado'], ['2024-D4', 'Enoxaparina 40mg', 'CS Benicalap', 'danger', 'Retenido'], ['2024-E1', 'Omeprazol 20mg', 'Hospital Dr. Peset', 'success', 'Verificado']];
  const filtered = rows.filter(r => (r[0] + r[1] + r[2]).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flex: 'none',
      background: 'var(--indigo-700)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pharmatrace-mark-white.svg",
    alt: "",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "PharmaTrace")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(([n, active]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: active ? '#fff' : 'var(--indigo-200)',
      background: active ? 'rgba(255,255,255,0.12)' : 'transparent',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 8px',
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--red-600)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "MJ"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "M. Jord\xE0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--indigo-200)'
    }
  }, "Farmacia Hosp.")))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '28px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Panel \xB7 Hospital La Fe"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      margin: '4px 0 0'
    }
  }, "Resumen de trazabilidad")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onExit
  }, "\u2190 Salir del panel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Lotes verificados",
    value: "1,284",
    delta: "+4.2% mes"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "En tr\xE1nsito",
    value: "37",
    deltaTone: "neutral",
    delta: "12 centros"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Incidencias",
    value: "3",
    deltaTone: "danger",
    delta: "-2 vs. anterior"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Tasa verificaci\xF3n",
    value: "99.8",
    unit: "%",
    delta: "+0.1%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: 0
    }
  }, "Lotes recientes"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar lote o medicamento\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    prefix: /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4-4",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }))
  }))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'left',
      fontSize: 12,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 20px',
      fontWeight: 600
    }
  }, "Lote"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 20px',
      fontWeight: 600
    }
  }, "Medicamento"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 20px',
      fontWeight: 600
    }
  }, "Centro"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 20px',
      fontWeight: 600
    }
  }, "Estado"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 14
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r[3],
    dot: true
  }, r[4])))), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "4",
    style: {
      padding: '28px 20px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, "Sin resultados para \u201C", q, "\u201D.")))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// Features + "how it works" trace flow.
function Features() {
  const {
    Card,
    Badge
  } = window.GVAPharmaTraceHubDesignSystem_019f02;
  const feats = [{
    t: 'Red de centros',
    d: 'Laboratorios, farmacias hospitalarias y centros de salud operan sobre un registro común y auditable.',
    i: 'red'
  }, {
    t: 'Verificación por lote',
    d: 'Cada movimiento de un lote queda sellado y validado en los puntos clave de la cadena de suministro.',
    i: 'check'
  }, {
    t: 'Informes institucionales',
    d: 'Cuadros de mando y reportes alineados con los criterios de la Generalitat Valenciana.',
    i: 'report'
  }];
  const icons = {
    red: /*#__PURE__*/React.createElement("path", {
      d: "M5 8a3 3 0 100-6 3 3 0 000 6zM19 8a3 3 0 100-6 3 3 0 000 6zM12 22a3 3 0 100-6 3 3 0 000 6zM7 6l8 12M17 6L9 18",
      stroke: "currentColor",
      strokeWidth: "1.6",
      fill: "none",
      strokeLinecap: "round"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M3 12l6 6L21 5",
      stroke: "currentColor",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    report: /*#__PURE__*/React.createElement("path", {
      d: "M5 3h11l4 4v14H5V3zM15 3v4h4M8 13h8M8 17h8M8 9h3",
      stroke: "currentColor",
      strokeWidth: "1.6",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  };
  const steps = [['01', 'Registro del lote', 'El laboratorio da de alta el lote con su identificador único.'], ['02', 'Distribución', 'Cada transferencia entre centros se sella en la red.'], ['03', 'Dispensación', 'El centro sanitario confirma la recepción y el uso.'], ['04', 'Auditoría', 'Trazabilidad completa disponible para revisión institucional.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Qu\xE9 ofrece"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '8px 0 8px',
      maxWidth: 620
    }
  }, "Una infraestructura \xFAnica para el medicamento"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-muted)',
      maxWidth: 600,
      marginBottom: 44
    }
  }, "PharmaTrace Hub estandariza la trazabilidad para toda la red sanitaria p\xFAblica valenciana."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, feats.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    interactive: true,
    padding: "28px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--indigo-50)',
      color: 'var(--indigo-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, icons[f.i])), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      margin: '0 0 8px'
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.6
    }
  }, f.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      marginBottom: 28
    }
  }, "C\xF3mo funciona la trazabilidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      position: 'relative'
    }
  }, steps.map(([n, t, d], idx) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      position: 'relative',
      paddingRight: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--indigo-700)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, n), idx < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: 'var(--indigo-100)'
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 16,
      margin: '0 0 6px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 1.55
    }
  }, d))))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer with institutional convivencia lockup.
function Footer() {
  const cols = [['Proyecto', ['Sobre PharmaTrace', 'Centros adheridos', 'Marco normativo', 'Contacto']], ['Plataforma', ['Acceso profesional', 'Documentación', 'Estado del servicio', 'API']], ['Institucional', ['Generalitat Valenciana', 'Fundació Fisabio', 'Aviso legal', 'Privacidad']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--indigo-800)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pharmatrace-white.svg",
    alt: "GVA PharmaTrace Hub",
    style: {
      height: 56,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)',
      maxWidth: 260,
      lineHeight: 1.6
    }
  }, "Plataforma p\xFAblica de trazabilidad del medicamento de la Comunitat Valenciana.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--indigo-200)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.75)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/convivencia-white.svg",
    alt: "Generalitat Valenciana \xB7 Fundaci\xF3 Fisabio",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 Fundaci\xF3 Fisabio \xB7 Generalitat Valenciana"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Site header with institutional brand bar, nav, language switch, access button.
function Header({
  onAccess,
  lang,
  setLang
}) {
  const {
    Button
  } = window.GVAPharmaTraceHubDesignSystem_019f02;
  const nav = ['El proyecto', 'Trazabilidad', 'Centros', 'Recursos'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--indigo-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '6px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.85,
      fontFamily: 'var(--font-body)'
    }
  }, "Generalitat Valenciana \xB7 Fundaci\xF3 Fisabio"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--indigo-200)',
      textDecoration: 'none'
    }
  }, "gva.es \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pharmatrace-blue.svg",
    alt: "GVA PharmaTrace Hub",
    style: {
      height: 46
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12
    }
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: i === 0 ? 'var(--indigo-700)' : 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600
    }
  }, ['VA', 'ES', 'EN'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '5px 10px',
      background: lang === l ? 'var(--indigo-700)' : 'transparent',
      color: lang === l ? '#fff' : 'var(--text-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onAccess
  }, "Acceso profesional")))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero — full-bleed indigo field with the network mark watermark.
function Hero({
  onAccess
}) {
  const {
    Button,
    Badge
  } = window.GVAPharmaTraceHubDesignSystem_019f02;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--indigo-700)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pharmatrace-mark-white.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -80,
      top: -40,
      height: 520,
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 24px 96px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 18,
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--indigo-200)'
    }
  }, "Plataforma de trazabilidad farmac\xE9utica"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 56,
      lineHeight: 1.04,
      margin: '0 0 20px',
      letterSpacing: '-0.025em'
    }
  }, "Cada lote, conectado.", /*#__PURE__*/React.createElement("br", null), "Cada paso, verificado."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 560,
      margin: '0 0 32px'
    }
  }, "GVA PharmaTrace Hub conecta laboratorios, distribuidores y centros sanitarios de la Comunitat Valenciana en una \xFAnica red de trazabilidad del medicamento."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "danger",
    onClick: onAccess
  }, "Acceder al panel"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "Conocer el proyecto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 44,
      flexWrap: 'wrap'
    }
  }, [['480+', 'Centros conectados'], ['1.2M', 'Lotes trazados'], ['99,8%', 'Verificación']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--indigo-200)'
    }
  }, l)))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
