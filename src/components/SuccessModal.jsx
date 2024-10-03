import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const SuccessModal = ({ isOpen, message }) => {
  const animationContainer = useRef(null)

  useEffect(() => {
    if (isOpen && animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_s2lryxtd.json' // URL to a success animation
      })

      return () => anim.destroy()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <div ref={animationContainer} style={{ width: '200px', height: '200px', margin: '0 auto' }}></div>
            <h4 className="mt-3">{message || 'Success!'}</h4>
          </div>
          <div className="modal-footer border-0 justify-content-center">
            <button type="button" className="btn btn-primary">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal;