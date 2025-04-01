import { useState, useEffect, useRef } from 'react';

export function ContainerWidthSensor() {
  const [containerWidth, setWidth] = useState<number>(0); // 管理宽度状态
  const ref = useRef<HTMLDivElement | null>(null); // 绑定 container 的 ref

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 创建 ResizeObserver 实例
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width); // 更新宽度状态
        }
      }
    });

    // 监听元素的尺寸变化
    resizeObserver.observe(element);

    return () => {
      // 组件卸载时清理观察器
      resizeObserver.disconnect();
    };
  }, []);

  return { containerWidth, ref }; // 返回宽度状态和绑定用的 ref
};

