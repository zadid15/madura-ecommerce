<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectToAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Cek apakah pengguna mengakses root
        if ($request->is('/')) {
            return redirect()->route('filament.admin.auth.login'); // Ganti ini jika Anda ingin mengarahkan ke halaman yang berbeda
        }

        return $next($request);
    }
}
