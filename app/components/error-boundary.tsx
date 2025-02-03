import React, { Component, type ErrorInfo } from "react";

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20, textAlign: "center" }}>
                    <h2>Something went wrong.</h2>
                    <p>Please try again later.</p>
                </div>
            );
        }
        return null; 
    }
}

export default ErrorBoundary;
